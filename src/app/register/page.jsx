"use client";

import {
  Button,
  Fieldset,
  Form,
  InputGroup,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUpPage() {
  const [image, setImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [role, setRole] = useState("attendee");
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    console.log(user, "userdata");

    // const uploadedImage = await imageUpload(user.image);
    // const plan = role === "collaborator" ? "collaborator_free" : "founder_free";
    // const status = role === "collaborator" ? "active" : "active";
    // const plan = "free";
    // const status = "active";

    // const { data, error } = await authClient.signUp.email({
    //   ...user,
    //   image: uploadedImage.url,
    //   role,
    //   plan,
    //   status,
    // });

    // if (data) {
    //   toast.success(`${user.name} account created successfully`);
    //   redirect("/");
    // }

    // if (error) {
    //   toast.error(error?.message);
    // }
  };
  // const handleGoogleSignIn = async () => {
  //   const data = await authClient.signUp.social({
  //     provider: "google",
  //   });
  // };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen flex items-center justify-center px-4
      bg-linear-to-br from-slate-100 via-indigo-100 to-purple-200
      dark:from-slate-950 dark:via-slate-900 dark:to-black py-20"
    >
      {/* CARD */}
      <motion.div
        variants={fadeUp}
        className="w-full max-w-md p-6 rounded-2xl shadow-2xl
        bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
        border border-white/30 dark:border-slate-700"
      >
        {/* TITLE */}
        <motion.h1 variants={fadeUp} className="text-2xl font-bold text-center">
          Create your account
        </motion.h1>
        <Form onSubmit={onSubmit}>
          <Fieldset.Group className="space-y-4">
            {/* NAME */}
            <motion.div variants={fadeUp}>
              <TextField isRequired name="name" type="text">
                <Label>Name</Label>
                <InputGroup className="rounded-full overflow-hidden">
                  <InputGroup.Prefix>
                    <FaUser />
                  </InputGroup.Prefix>
                  <InputGroup.Input placeholder="John Doe" />
                </InputGroup>
              </TextField>
            </motion.div>

            {/* EMAIL */}
            <motion.div variants={fadeUp}>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <InputGroup className="rounded-full overflow-hidden">
                  <InputGroup.Prefix>
                    <FaEnvelope />
                  </InputGroup.Prefix>
                  <InputGroup.Input placeholder="john@example.com" />
                </InputGroup>
              </TextField>
            </motion.div>

            {/* PASSWORD */}
            <motion.div variants={fadeUp}>
              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <InputGroup className="rounded-full overflow-hidden">
                  <InputGroup.Prefix>
                    <FaLock />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter password"
                  />

                  <InputGroup.Suffix onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <BsEyeSlash /> : <Eye />}
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>
            </motion.div>

            {/* ROLE */}
            <motion.div variants={fadeUp}>
              <Select
                isRequired
                name="role"
                placeholder="Select one"
                onChange={(value) => setRole(value)}
              >
                <Label>Signup As</Label>

                <Select.Trigger className="rounded-full">
                  <span className="mr-2">👤</span>
                  <Select.Value />
                </Select.Trigger>

                <Select.Popover className="rounded-3xl">
                  <ListBox>
                    <ListBox.Item id="attendee">Attendee</ListBox.Item>
                    <ListBox.Item id="organizer">Organizer</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </motion.div>

            {/* IMAGE */}
            <motion.div variants={fadeUp}>
              {/* <div className="w-full">
                <Label isRequired>Image</Label>
                <label
                  htmlFor="image-upload"
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 dark:border-none rounded-full cursor-pointer text-gray-600  transition bg-white dark:bg-[#18181B]"
                >
                  <span>Click here to upload your image</span>
                  <span className="text-xs opacity-60">Browse</span>
                </label>

                <input
                  id="image-upload"
                  name="image"
                  type="file"
                  className="hidden"
                />
              </div> */}

              <div className="space-y-2">
                <label
                  isRequired
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Image
                </label>

                <label
                  htmlFor="image-upload"
                  className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-300 px-4 py-3 transition hover:border-blue-500 dark:border-slate-700 dark:hover:border-blue-400"
                >
                  <div className="text-center mx-auto">
                    <p className="font-medium text-slate-900 dark:text-white">
                      Upload Your Image
                    </p>

                    <span
                      className={`text-sm ${
                        image
                          ? "text-green-600 dark:text-green-400"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {image ? "✅ Image uploaded" : "Click to browse"}
                    </span>
                  </div>

                  <input
                    id="image-upload"
                    name="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                  />
                </label>
              </div>
            </motion.div>
          </Fieldset.Group>

          {/* BUTTON */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" className="w-full mt-5 bg-indigo-600">
              Signup
            </Button>
          </motion.div>
        </Form>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.div>
        {/* OR DIVIDER (MATCH SIGNUP STYLE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-xs text-gray-500 my-4">
            <motion.div
              className="flex-1 h-px bg-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <span className="whitespace-nowrap">OR CONTINUE WITH</span>

            <motion.div
              className="flex-1 h-px bg-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              // onClick={handleGoogleSignIn}
              className="w-full rounded-full border hover:bg-indigo-600 transition"
            >
              <FcGoogle size={20} />
              Continue with Google
            </Button>
          </motion.div>
        </motion.div>
        {/* FOOTER */}
        <motion.p variants={fadeUp} className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500">
            Login
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
