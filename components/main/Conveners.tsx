import Card from "../sub/Card";
const College = () => {
  return (
    <div className="z-[50] flex justify-center">
      <div className="border rounded-lg border-[#2A0E61] mt-20 z-20 w-9/12 shadow-2xl shadow-[#2A0E61] bg-[#03001417] pb-14">
        <div
          className="flex flex-col items-center justify-center "
          id="contact"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
            SPECIAL THANKS TO OUR CONVENERS
          </h1>
          <div className=" flex flex-col md:flex-row justify-center">
            <div className="px-6 py-2 md:py-0">
              <Card
                src="/narayanan_sir.jpg"
                title="
Dr. S.Narayanan"
                description="Head of Department - Information Technology"
              />
            </div>
            <div className="px-6 py-2 md:py-0">
              <Card
                src="/sekar_sir.jpg"
                title="
Dr. S.Sekar"
                description="Assistant Professor - Information Technology"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;
