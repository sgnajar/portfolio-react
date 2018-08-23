import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import SkillsFull from './skillsFull';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={3}>
            <div style={{textAlign: 'center'}}>
              {/*<img
                src="http://www.creditlenders.info/wp-content/uploads/cartoon-avatar-portrait-of-man-set-2-clipart-the-arts-cartoon-avatar.png"
                alt="avatar"
                style={{height: '250px'}}
                /> */}
            </div>
            <h2 style={{paddingTop: '1em'}}>Sasan Najar</h2>
            <h4 style={{color:'grey'}}>Bioinformatician</h4>
            <hr style={{borderTop: '3px solid #212F3C',width: '50%'}}/>
            <p>test</p>
            <hr style={{borderTop: '3px solid #212F3C',width: '50%'}}/>
            <h5>Location</h5>
            <p>Charlotte,NC</p>
            <h5>Phone</h5>
            <p>(980) 254-2199</p>
            <h5>Email</h5>
            <p>sasangnajar@gmail.com</p>
            <h5>Web</h5>
            <p>sasangnajar.com</p>
            <hr style={{borderTop: '3px solid #212F3C',width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={9}>
            <h3>Education</h3>

            {/* Education1*/}
            <Education
              start={2015}
              end={2016}
              schoolName="UNC Charlotte"
              location="Charlotte, NC"
              schoolDescription="Mastered in programming languages, database management systems, and the Statistical method."
            />
            {/* Education2*/}
            <Education
              start={2014}
              end={2015}
              schoolName="UNC Charlotte"
              location="Charlotte, NC"
              schoolDescription="Experienced with the method development for analysis of large-scale biological data."
            />
            {/* Education3*/}
            <Education
              start={2012}
              end={2013}
              schoolName="University of Skovde"
              location="Skovde, Sweden"
              schoolDescription="Studied the fundamental problems within the field of Bioinformatics, different types of methods and programs used for analyzing data."
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h3>Work Experiences</h3>
            {/* Experience1*/}
            <Experience
              start= {"Mar 2016"}
              end={"Dec 2017"}
              jobName="Bioinformatics Specialist"
              location="Charlotte, NC"
              jobDescription=" "
            />

            {/* Experience2*/}
            <Experience
              start= {"Mar 2015"}
              end={"Mar 2016"}
              jobName="Research Assistant"
              location="Charlotte, NC"
              jobDescription=" "
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h3>Skills</h3>
            <SkillsFull
              SkillsCategory= {"Programming"}
              skillName= {"Python, Biopython, Java, R, SQL, HTML, Markdown, and LaTex"}
            />

            <SkillsFull
              SkillsCategory= {"Database"}
              skillName= {"NoSQL (MongoDB) and RDBMS (MySQL)"}
            />

            <SkillsFull
              SkillsCategory= {"Next Generation Analysis tools"}
              skillName= {"NCBI API, BAM/SAM/BCF/BED-tools, SRA/FASTX-toolkits, Bowtie2/BWA, Trimmomatic, SPAdes and QUAST assemblies, IGV, Mesquite, and CLC Genomics Workbench"}
            />

            <SkillsFull
              SkillsCategory= {"Familiar"}
              skillName= {"Numpy, SciPy, Matplotlib, Jupyter Notebook(IPython), BeautifulSoup, StandfordNLP, JavaScript, React.js, Chart.js, and Django Framework"}
            />

            <SkillsFull
              SkillsCategory= {"Platforms"}
              skillName= {"Mac OS X, Windows, and Ubuntu "}
            />

            <hr style={{borderTop: '1px dashed red',width: '40%', margin: 'auto'}}/>
            <br></br>

            <Skills
              skill= {'Python'}
              progress= {60}
            />
            <Skills
              skill= {'Java'}
              progress= {35}
            />
            <Skills
              skill= {'React'}
              progress= {25}
            />
            <Skills
              skill= {'HTML/CSS'}
              progress= {25}
            />
            <Skills
              skill= {'SQL'}
              progress= {25}
            />
            <Skills
              skill= {'MongoDB'}
              progress= {30}
            />
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume;
