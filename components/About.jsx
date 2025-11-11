import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are UBI</Title>
          <p className="my-5 flex flex-col items-center">
            Every dish tells a story — unique, flavorful, and made with heart.
While many recipes may look similar, what makes ours different is the passion behind every plate.
We don’t follow trends or random tastes — we craft flavors that feel real, honest, and memorable.
Because here, authenticity isn’t just a word — it’s our main ingredient.
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
