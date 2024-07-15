import Image from "next/image"
import ContactSection from "../../components/ContactSection"

const projects = [
  {
  id: 1,
  name: 'Drawing room for family time',
  description: 'Bedroom with a clean and comfortable design for your family. charming whit a modern design.',
  image: '/images/project3.jpg',
  link: ''
  },
  {
  id: 2,
  name: 'Kitchen look modern and clean',
  description: 'kitchen look modern and clean. charming whit a modern design.',
  image: '/images/project2.jpg',
  link: ''
  },
  {
    id: 3,
    name: 'Perfect living room for family time',
    description: 'Drawing room with a clean and comfortable design for your family.',
    image: '/images/project4.png',
    link: ''
  },
  {
  id: 4,
  name: 'Drawing room for family time',
  description: 'Bedroom with a clean and comfortable design for your family. charming whit a modern design.',
  image: '/images/project3.jpg',
  link: ''
  },
  {
  id: 5,
  name: 'Kitchen look modern and clean',
  description: 'kitchen look modern and clean. charming whit a modern design.',
  image: '/images/project2.jpg',
  link: ''
  },
  {
    id: 6,
    name: 'Perfect living room for family time',
    description: 'Drawing room with a clean and comfortable design for your family.',
    image: '/images/project4.png',
    link: ''
  },
]

const page = () => {
  return (
    <div>
      <div className="bg-[url('/images/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">Our Projects</h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {
          projects.map((project) => (
            <div key={project.id} className="relative rounded-xl overflow-hidden group">
              <div>
                <Image src={project.image} width={480} height={380} alt="" className="w-full" />
              </div>
              <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96
              gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
                <h1 className="text-2xl font-semibold">{project.name}</h1>
                <p className="py-4">{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>
      <ContactSection />
    </div>
  )
}

export default page