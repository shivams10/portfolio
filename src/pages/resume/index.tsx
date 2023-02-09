import { languages, libraries } from 'asserts/services';
import { Bar } from 'components/bar';

function Resume() {
  return (
    <div className="px-6 py-4">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-2 text-xl font-bold">Education</h5>
          <div className="grid grid-cols-2 -space-x-20 space-y-1 max-lg:space-x-0">
            <h5 className="w-auto text-lg font-bold ">B.Tech :</h5>
            <p className="flex flex-col">
              Poornima College of Engineering
              <span className="font-light">Computer Science & Engineering</span>
            </p>
          </div>
          <div className="grid grid-cols-2 -space-x-20 space-y-1 max-lg:space-x-0">
            <h5 className="text-lg font-bold ">XII :</h5>
            <p className="flex flex-col">
              Lions English School
              <span className="font-light">Physics, Chemistry, Maths, CS</span>
            </p>
          </div>
          <div className="grid grid-cols-2 -space-x-20 space-y-1 max-lg:space-x-0">
            <h5 className="text-lg font-bold ">X :</h5>
            <p>Lions English School</p>
          </div>
        </div>
        <div>
          <h5 className="my-2 text-xl font-bold">Experiences</h5>
          <div className="grid grid-cols-2 -space-x-8 space-y-1 max-lg:space-x-0">
            <h5 className="w-auto text-lg font-bold ">Gkmit Pvt Ltd :</h5>
            <p className="flex flex-col">
              Frontend Developer Intern
              <span className="font-light">09/2022 - present</span>
            </p>
          </div>
          <div className="grid grid-cols-2 -space-x-8 space-y-1 max-lg:space-x-0">
            <h5 className="text-lg font-bold ">PRP Webs :</h5>
            <p className="flex flex-col">
              Frontend Developer Intern
              <span className="font-light">07/2022 - 09/2022</span>
            </p>
          </div>
          <div className="grid grid-cols-2 -space-x-8 space-y-1 max-lg:space-x-0">
            <h5 className="text-lg font-bold ">WorldInteria :</h5>
            <p className="flex flex-col">
              Fullstack Developer Intern
              <span className="font-light">06/2022</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-2 text-xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map(language => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-2 text-xl font-bold">Libraries & Tools</h5>
          <div className="my-2">
            {libraries.map(library => (
              <Bar data={library} key={library.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
