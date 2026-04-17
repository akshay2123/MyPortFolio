import { QRCodeCanvas } from "qrcode.react";

const ResumeQR = () => {
  const resumeUrl =
    "https://akshaykale-portfolio.vercel.app/Akshay_ReactJS_5yr.pdf";

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <QRCodeCanvas
        value={resumeUrl}
        size={120}
        bgColor="#ffffff"
        fgColor="#000000"
      />

      <p className="text-xs text-slate-300 mt-3 text-center leading-tight">
        Scan to download<br />my resume
      </p>
    </div>
  );
};

export default ResumeQR;