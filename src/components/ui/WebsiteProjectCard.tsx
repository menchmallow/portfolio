export interface ProjectCardProps {
  title: string;
  link: string;
  ImageComponent: React.ReactElement;
  descriptions: string[];
  key_features?: string[];
  stack: string[];
}

const WebsiteProjectCard = ({
  title,
  link,
  ImageComponent,
  descriptions,
  key_features,
  stack,
}: ProjectCardProps) => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl my-4">{title}</h2>
        <a
          href={link}
          target="_blank"
          className="border border-gray-400 p-2 rounded-lg hover:bg-black hover:text-white"
        >
          view here!
        </a>
      </div>
      {ImageComponent}
      <div className="mt-4">
        {descriptions.map((description, i) => (
          <p className="my-2" key={i}>
            {description}
          </p>
        ))}
        {key_features && (
          <>
            <p className="my-2">key features:</p>
            <ul className="list-disc mx-10">
              {key_features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </>
        )}
        <div>
          <p className="my-4">stack:</p>
          <div className="flex items-center flex-wrap gap-2">
            {stack.map((tech, i) => (
              <p
                key={i}
                className="shadow-sm rounded-lg p-2 border border-gray-200"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteProjectCard;
