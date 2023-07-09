import React, { useState } from "react";
import axios from "axios";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA-9lQTOeAgL8ElP2nJ8Fj3EIKOHEJQwmk",
  authDomain: "ecell-2704e.firebaseapp.com",
  projectId: "ecell-2704e",
  storageBucket: "ecell-2704e.appspot.com",
  messagingSenderId: "576322627480",
  appId: "1:576322627480:web:b3aed16aa0667863fd6ded"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Upload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState([]);

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles(fileList);
    setUploadProgress(Array(fileList.length).fill(0));
  };

  const handleUpload = async () => {
    const uploadPromises = files.map((file, index) => {
      return new Promise(async (resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "fy9apprg");

        try {
          const response = await axios.post("https://api.cloudinary.com/v1_1/dj9kcydeo/image/upload", formData, {
            onUploadProgress: (progressEvent) => {
              const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
              setUploadProgress((prevProgress) => {
                const updatedProgress = [...prevProgress];
                updatedProgress[index] = progress;
                return updatedProgress;
              });
            },
          });
          resolve(response.data.secure_url);
        } catch (error) {
          reject(error);
        }
      });
    });

    try {
      const uploadedUrls = await Promise.all(uploadPromises);
      console.log("Uploaded URLs:", uploadedUrls);
      uploadImage(uploadedUrls);
    } catch (error) {
      console.error("Upload Error:", error);
      // Handle upload error here
    }
  };

  const uploadImage = async (downloadURLs) => {
    try {
      const uploadTasks = downloadURLs.map((downloadURL) => {
        return addDoc(collection(db, 'images'), {
          downloadURL,
          createdAt: serverTimestamp()
        });
      });

      const uploadResults = await Promise.all(uploadTasks);
      console.log('Uploaded images:', uploadResults);
    } catch (error) {
      console.log('Error adding images to database:', error);
    }
  };

  return (
    <div>
      <div className="space"></div>
      <div className="space"></div>
      <h1>Upload</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress.map((progress, index) => (
        <div key={index}>
          <p>File: {files[index].name}</p>
          <p>Progress: {progress}%</p>
        </div>
      ))}
    </div>
  );
};

export default Upload;
