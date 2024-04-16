function Skills(){
    
    const skill1 = "Object Oriented Programming";
    const skill2 = "Design Patterns";
    const skill3 = "Complex Problem Solving";

    const FESkill1 ="JavaScript";
    const FESkill2 ="HTML";
    const FESkill3 ="CSS"
    const FESkill4 ="React"

    const BESkill1 ="C#";
    const BESkill2 ="ASP.NET";
    const BESkill3 ="Entity Framework Core";
    const BESkill4 ="SQL: Database Design";

    
  return (
    <>
      <div className="skills">
        <h1>Berrie's AWESOME Skills</h1>
        <div className="skills-container">
            <div className="skills-category">
            <h2>Front-end</h2>
            <ul className="FrontEnd-skill-list skill-list">
                <li>{FESkill1}</li>
                <li>{FESkill2}</li>
                <li>{FESkill3}</li>
                <li>{FESkill4}</li>
            </ul>
            </div>

            <div className="skills-category">
            <h2>Back-end</h2>
            <ul className="BackEnd-skill-list skill-list">
                <li>{BESkill1}</li>
                <li>{BESkill2}</li>
                <li>{BESkill3}</li>
                <li>{BESkill4}</li>
            </ul>
            </div>

            <div className="skills-category">
            <h2>Other skills</h2>
            <ul className="skill-list">
                <li>{skill1}</li>
                <li>{skill2}</li>
                <li>{skill3}</li>
            </ul>
            </div>
        </div>
      </div>
    </>
  );

}

export default Skills;
