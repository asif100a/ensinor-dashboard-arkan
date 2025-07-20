import Image from "next/image";

const CertificatePreview = () => {
  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-md">
      {/* Certificate Header */}
      <div className="mb-4 text-black-primary">
        <h2 className="text-xl font-semibold text-black-normal">
          Certificate Preview
        </h2>
        <p className="text-sm">Classic template</p>
      </div>

      {/* Certificate Body */}
      <div className="bg-gray-background rounded-lg p-6 relative space-y-6">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          {/* Logo */}
          <div className="space-y-2">
            <Image
              src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
              alt="Slack Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h3 className="text-2xl font-semibold text-black-normal">Slack</h3>
          </div>
          {/* Certificate ID & QR */}
          <div className="text-right space-y-1">
            <p className="text-black-secondary">Certificate ID</p>
            <p className="text-sm font-medium text-black-primary">
              ZL-2025-06524-3265
            </p>
            <div className="flex justify-end mt-2">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=ZL-2025-06524-3265"
                alt="QR Code"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* Certificate Title */}
        <div className="text-center space-y-2">
          <p className="uppercase text-black-secondary font-medium">
            Certificate of Completion
          </p>
          <h1 className="text-2xl font-semibold text-black-normal">
            Advanced UX/UI Design
          </h1>
        </div>

        {/* Certificate Body Text */}
        <div className="text-center text-black-primary space-y-2">
          <p className="text-lg font-medium">This is to certify that</p>
          <p className="text-xl font-semibold text-black-normal">
            Md Shahid Hasan
          </p>
        </div>

        <p className="mt-2 max-w-[452px] mx-auto text-center text-black-normal">
          has successfully completed 40 hours of training in Advanced Web
          Development with instructor David Smith.
        </p>

        {/* Topics */}
        <div className="text-center text-black-primary">
          <p className="font-medium text-lg">Main Topics</p>
          <p className="font-medium">HTML, CSS, JavaScript, React, Node.js</p>
        </div>

        {/* Signature and Date */}
        <div className="flex justify-between items-end gap-6 text-black-primary">
          <div className="text-left">
            <div className="border-t pt-0 border-black w-fit text-lg text-black-primary font-medium">
              <p>Authorized Signature</p>
            </div>
          </div>
          <div className="text-right">
            <p className="">Date of Completion</p>
            <p className="font-medium text-lg">April 15, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
