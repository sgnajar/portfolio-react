import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={12}>
          <h2>About Me</h2>
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I received a Master’s degree in
          Biomedicine from the Skovde University in Sweden, during which I took part in a research on
          prostate cancer; in this research I gained extensive wet-lab experiences as well as performed
          statistical analysis on the collected samples. To deepen my understanding in computational
          aspects of biological research, I joined the Bioinformatics department in UNC Charlotte
          to pursue a Master’s degree. This program has a rich curriculum covering a myriad of
          computational related topics including but not limited to programming languages
          (Perl, Python and Java), database management systems (MySQL and MongoDB) and statistical method (R)
           as well as topics in genomics and molecular sequence analysis.
           Having worked at two graduate schools for over five years, I have developed a wide range of
           computational-related skills, extensive wet-lab experiences, and experience with internal and
           external benchmarking software. I excel at establishing goals, collaborating with
          cross-functional departments, and motivating teams to exceed their personal and corporate objectives.
          During my time at UNC Charlotte, I worked on several molecular phylogenetic analysis projects,
          focusing on multiple sequence alignment, DNA and RNA sequencing technology, and database management
           systems. I also took on a research project calculating the allele frequencies in different human
           populations. Subsequently, I took part in a project to visualize and graph analytic applications
            of the biosurveillance environment to combat the spread of multi-drug resistant bacteria.
            Some of these massively computational projects require use of the campus-wide HPC cluster,
            which helped me gain a deeper understanding of biological databases and sequence analysis.
            My experience with machine learning methodologies has helped me to perform a pipeline to carry out
             dimension reduction, clustering, and classification analysis of a metabolomics dataset.
             My desire is to be part of a high-level team in an extremely challenging environment that
             can develop my technical skills, hands on experience, responsibility and efficiency in
             facilitating development of the organization.
             </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
