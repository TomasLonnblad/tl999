"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ArrowRight, Zap, Shield, Code } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const MotionLink = motion(Link);

// @ts-ignore
const FeatureCard = ({ feature, icon: Icon, delay }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-white/10"
    whileHover={{ scale: 1.05, rotateY: 15, borderColor: "rgba(255,255,255,0.2)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Icon className="w-12 h-12 mb-4 text-indigo-400" />
    <h3 className="text-xl font-bold mb-2 text-white">{feature}</h3>
    <p className="text-gray-300">
      Implemented new script  .
    </p>
  </motion.div>
);

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-50"
      style={{ scaleX: width, transformOrigin: "0%" }}
    />
  );
};

export default function AnimatedLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* <ScrollProgress /> */}

      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full filter blur-[100px] animate-spin-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-5 lg:mt-0">
        <section className="container min-h-screen flex flex-col justify-center items-center gap-8 pb-8 pt-6 md:py-10">
          <motion.div
            className="flex max-w-[980px] flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Modular Design with Shadcn CLI &nbsp;
            </motion.h1>
            {/* <motion.h2
              className="text-3xl font-bold md:text-5xl text-gray-200 mt-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              with Easy UI
            </motion.h2> */}
            <motion.p
              className="max-w-[700px] text-xl text-gray-500 mt-2 font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Craft stunning interfaces UI
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >

          <a href="https://tomaslonnblad.github.io/tleeee">
            <FeatureCard feature="3D" icon={Zap} delay={1.2} /></a>
             <a href="https://tomaslonnblad-tl9-im-2p0k.bolt.host/dashboard/motion4/app?fbclid=IwY2xjawQFD_lleHRuA2FlbQIxMABicmlkETF1cUxtM3o1UnFUbjdSM3Jrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHq3vHpHsChGTSnUzN08AHqvsmRMEXyWImIbqOfehI4aZR79JVaKitvD1_son_aem_OldzvWsWY6jnujRXwMtSfA">
            <FeatureCard feature="Samples" icon={Shield} delay={1.4} /></a>
            <a href="https://tomaslonnblad.github.io/">
            <FeatureCard feature="Open Source" icon={Code} delay={1.6} /></a>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
