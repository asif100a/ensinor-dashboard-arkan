"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

export default function UploadMaterials() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a JPG, JPEG, or PNG file.");
        return;
      }
      // Validate dimensions
      const img = new window.Image() as HTMLImageElement;
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width < 600 || img.height < 450) {
          alert("Image dimensions should be at least 600x450px.");
          URL.revokeObjectURL(img.src);
        } else {
          setPreviewUrl(img.src); // Set preview URL
          // console.log("File selected:", file.name);
          // Optionally handle file (e.g., upload to server)
        }
      };
      img.onerror = () => {
        alert("Failed to load image.");
        URL.revokeObjectURL(img.src);
      };
    }
  };

  // Trigger file input click
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Handle drag and drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0 && fileInputRef.current) {
      fileInputRef.current.files = files;
      handleFileChange({
        target: fileInputRef.current,
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Clear preview
  const clearPreview = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl">
      <label
        htmlFor="file"
        className="text-xl font-semibold text-black-primary"
      >
        Upload Materials
      </label>

      <div
        className="flex flex-col items-center w-full p-5 py-10 mx-auto text-center bg-white border-2 border-gray-300 border-dashed dark:bg-gray-900 dark:border-gray-700 rounded-xl mt-6"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-gray-500 dark:text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>

        <h2 className="mt-2 font-medium tracking-wide text-gray-700 dark:text-gray-200">
          Drag and drop files here
        </h2>

        <p className="mt-3 text-sm tracking-wide text-gray-500 dark:text-gray-400">
          Note: Only JPG, JPEG, and PNG. Our suggested dimensions are 600px *
          450px. Larger images will be cropped to 4:3 to fit our
          thumbnails/previews.
        </p>

        {/* Upload Button */}
        <button
          type="button"
          className="mt-4 px-8 py-2 bg-yellow-primary rounded-md font-semibold text-black-primary cursor-pointer"
          onClick={handleButtonClick}
        >
          Browse Files
        </button>

        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg,image/jpg,image/png"
        />

        {/* Image Preview */}
        {previewUrl && (
          <div className="mt-4 relative">
            <Image
              src={previewUrl}
              alt="Preview"
              width={300}
              height={250}
              className="max-w-[300px] max-h-[225px] object-contain rounded-md"
            />
            <button
              type="button"
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 cursor-pointer"
              onClick={clearPreview}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
