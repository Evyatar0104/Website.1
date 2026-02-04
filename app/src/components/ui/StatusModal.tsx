"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface StatusModalProps {
    isOpen: boolean;
    status: 'success' | 'error' | null;
    onClose: () => void;
    title?: string;
    message?: string;
}

export function StatusModal({ isOpen, status, onClose, title, message }: StatusModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!isOpen) return null;

    // Use portal to render at root level to ensure it's on top of everything
    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl overflow-hidden"
                    >
                        {/* Background Shine */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#00F2FF]/20 rounded-full blur-[50px] pointer-events-none" />

                        {status === 'success' ? (
                            <div className="mb-6 relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", duration: 0.6, bounce: 0.5 }}
                                    className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20"
                                >
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            d="M20 6L9 17l-5-5"
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                        ) : (
                            <div className="mb-6 relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", duration: 0.6, bounce: 0.5 }}
                                    className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20"
                                >
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </motion.div>
                            </div>
                        )}

                        <h3 className="text-2xl font-bold text-white mb-2">
                            {title || (status === 'success' ? "ההודעה נשלחה!" : "שגיאה")}
                        </h3>
                        <p className="text-white/60 mb-8">
                            {message || (status === 'success'
                                ? "תודה שפנית אלינו. קיבלנו את הפרטים וניצור קשר בהקדם."
                                : "אירעה שגיאה בשליחת הטופס. אנא נסו שוב.")}
                        </p>

                        <button
                            onClick={onClose}
                            className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-colors font-medium"
                        >
                            סגור
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
