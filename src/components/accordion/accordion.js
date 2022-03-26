import "./accordion.css";

export const Accordion = () => {
  const handleClick = (e) => {
    const targetElClass = e.currentTarget.classList;
    if (!targetElClass.contains("active")) {
      targetElClass.add("active");
    } else {
      targetElClass.remove("active");
    }
  };

  return (
    <section className="accordion-container">
      <div className="accordion-trigger" onClick={handleClick}>
        Section heading
      </div>
      <div className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};
