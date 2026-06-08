'use client';

import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);

  // Verify against Firebase hardcoded value
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    try {
      // Fetch the master password document from Firestore
      const configDoc = await getDoc(doc(db, "config", "admin"));
      
      if (configDoc.exists()) {
        const remotePassword = configDoc.data().password;
        if (password === remotePassword) {
          setIsAuthenticated(true);
          toast.success("Identity verified.");
        } else {
          toast.error("Invalid credentials.");
        }
      } else {
        toast.error("Auth system not configured. Create 'config/admin' document with a 'password' field in Firestore.");
      }
    } catch (error) {
      console.error("Auth error:", error);
      toast.error("Server connection failed.");
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const q = query(collection(db, "enquiries"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs: any[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setEnquiries(docs);
      setLoading(false);
    }, (error) => {
      console.error("Firestore error:", error);
      toast.error("Failed to load enquiries.");
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      await deleteDoc(doc(db, "enquiries", id));
      toast.success("Enquiry removed.");
    } catch (e) {
      toast.error("Delete failed.");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#F5F3FF] flex items-center justify-center p-6 selection:bg-[#5B21B6] selection:text-[#F5F3FF]">
        <Toaster position="bottom-center" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-12 rounded-[3rem] bg-white border border-[#2D1B69]/5 shadow-2xl text-center"
        >
          <h1 className="text-3xl font-bold font-syne uppercase mb-8 text-[#2D1B69]">Admin Portal</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full bg-[#F5F3FF] border-2 border-transparent focus:border-[#5B21B6] rounded-2xl p-4 text-center text-lg font-montagu focus:outline-none transition-all text-[#2D1B69]"
            />
            <button 
              type="submit"
              disabled={isVerifying}
              className="w-full bg-[#2D1B69] text-[#F5F3FF] py-4 rounded-2xl font-syne font-bold uppercase tracking-widest hover:bg-[#5B21B6] transition-colors disabled:opacity-50"
            >
              {isVerifying ? "Verifying..." : "Access Dashboard"}
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F3FF] p-8 md:p-24 selection:bg-[#5B21B6] selection:text-[#F5F3FF] text-[#2D1B69]">
      <Toaster position="bottom-center" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-[#5B21B6]/60 mb-4 block">Dashboard</span>
            <h1 className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight leading-none">Project <br/> Enquiries</h1>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-[10px] font-bold uppercase tracking-widest border-b border-[#2D1B69] pb-1 hover:text-[#5B21B6] hover:border-[#5B21B6] transition-colors"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="py-24 text-center font-montagu italic opacity-40">Loading latest data...</div>
        ) : enquiries.length === 0 ? (
          <div className="py-24 text-center font-montagu italic opacity-40">No enquiries found yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {enquiries.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-[#2D1B69]/5 shadow-sm hover:shadow-md transition-all group relative"
                >
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity text-xs font-bold uppercase tracking-tighter"
                  >
                    Delete
                  </button>

                  <div className="mb-6">
                    <div className="text-[10px] font-bold uppercase text-[#5B21B6] tracking-widest mb-1">
                      {item.service || "General Inquiry"}
                    </div>
                    <h3 className="text-2xl font-bold font-syne uppercase leading-tight">{item.name}</h3>
                  </div>

                  <div className="space-y-2 mb-8 font-montagu text-sm">
                    <p className="flex justify-between">
                      <span className="opacity-40">Email:</span>
                      <span className="font-bold underline text-[#2D1B69]">{item.email}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="opacity-40">Phone:</span>
                      <span className="font-bold text-[#2D1B69]">{item.phone}</span>
                    </p>
                  </div>

                  <div className="bg-[#F5F3FF] p-6 rounded-2xl mb-6">
                    <p className="font-montagu text-sm leading-relaxed italic text-[#5B4A9E]">
                      "{item.vision || "No vision described."}"
                    </p>
                  </div>

                  <div className="text-[10px] font-bold uppercase opacity-30 text-right">
                    {item.timestamp?.toDate ? item.timestamp.toDate().toLocaleString() : "Just now"}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
