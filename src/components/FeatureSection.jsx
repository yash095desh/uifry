import FeatureHeading from "@/components/FeatureHeading";
import FeaturePoint from "@/components/FeaturePoint";
import Image from "next/image";

function FeatureSection() {
  return (
    <>
    <div className=" px-4 flex items-center overflow-hidden">
        <div className=" w-[650px] h-[760px] relative hidden lg:flex ">
          <Image src={"/feature1.svg"} fill className=" object-contain" />
        </div>
        <div className=" flex flex-col gap-6 max-w-lg ml-10 relative ">
          <Image
            src={"/gradient1.svg"}
            width={495}
            height={360}
            className=" object-contain -z-10 absolute -right-64 top-0"
          />
          <FeatureHeading title="Features" subtitle="Uifry Premium" />
          <FeaturePoint
            image="/StarIcon.png"
            title="Budgeting Intervals"
            desc=" Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
      faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />
          <FeaturePoint
            image="/Hexagon.png"
            title="Budgeting Intervals"
            desc=" Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
      faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />
          <FeaturePoint
            image="/Cube.png"
            title="Budgeting Intervals"
            desc=" Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
      faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />
        </div>
      </div>

      <div className="flex px-4 max-w-6xl m-auto justify-center  ">
        <div className="flex flex-col gap-10 max-w-2xl px-4  flex-1 py-20 xl:py-56   ">
          <FeatureHeading title={"advatnages"} subtitle={"Why Choose Uifry?"} />
          <div>
            <div className=" flex gap-6 items-center">
              <Image
                src={'/Bell-Icon.svg'}
                width={48}
                height={48}
                className=" object-contain"
              />
              <h2 className=" font-[600] text-2xl">Clever Notifications</h2>
            </div>
            <p className=" text-slate-500 ">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
          </div>
        </div>
        <div className="relative hidden lg:flex" style={{flex : 1.5}}>
          <Image src={'/feature2.svg'} fill className=" object-contain"/>
        </div>
      </div>

      <div className=" flex flex-1 justify-center items-center gap-[50px] mb-10">
        <div className=" hidden lg:flex">
          <Image src={'/feature3.svg'} width={605} height={715} className=" object-contain"/>
        </div>
        <div>
        <div className="flex flex-col px-4 max-w-2xl lg:max-w-lg gap-4 relative">
            <div className=" flex gap-6 items-center ">
              <Image
                src={'/CircularStar.svg'}
                width={48}
                height={48}
                className=" object-contain"
              />
              <h2 className=" font-[600] text-2xl">Fully Customizable</h2>
            </div>
              <Image src={'/Star.svg'} width={48} height={48} className=" object-contain absolute right-10 -bottom-28" />
            <p className=" text-slate-500 ">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection