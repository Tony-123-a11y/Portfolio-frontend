
import { GrShare } from "react-icons/gr"
import { LuGithub } from "react-icons/lu"

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.technology.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-3 text-gray-600">{project.description}</p>

        <div className="mt-4 flex space-x-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
           
            <GrShare className="w-4 h-4 mr-2" />
            Live Demo
          </a>
          <a
            href={project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
          >
          
            <LuGithub className="w-4 h-4 mr-2"/>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
