import Image from "next/image";
import sample from "@/public/1.png";
import Grid from "@mui/material/Grid";
import { IoIosCall, IoIosMail } from "react-icons/io";
const Paper = () => {
  return (
    <div className="z-[50] flex justify-center">
      <div className="border rounded-lg border-[#2A0E61] mt-20 z-20 w-9/12">
        <Grid container spacing={2}>
          <Grid item xs={8} md={5}>
            <Image
              src={sample}
              alt="paper presentation"
              width={400}
              height={400}
              className="m-20 md:m-10 rounded-lg"
            />
          </Grid>
          <Grid item xs={6} md={5}>
            <div className="m-10 md:m-5 md:mt-15">
              <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                Paper Presentation
              </h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IoIosCall style={{ color: "white", fontSize: "24px" }} />
                <p
                  className="text-white text-lg py-3"
                  style={{ marginLeft: "8px" }}
                >
                  Coordinator - Sricharumitha. M - 70101 30495
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <IoIosCall style={{ color: "white", fontSize: "24px" }} />
                <p
                  className="text-white text-lg py-3"
                  style={{ marginLeft: "8px" }}
                >
                  Coordinator - Akash. K - 80728 04085
                </p>
              </div>
              <h3 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                Rules
              </h3>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Paper;
