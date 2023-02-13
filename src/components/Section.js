import React from 'react';
import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
       <div>
        <h1>
        I'm a full-stack web Developer        </h1>
        
        <h2>
        Logistics and Transportation Regional Assistant Manager Abdul is a
            Regional Assistant Manager for Yazmin Transport, Inc. He is responsible
            for several key indicators including carrier operations, line haul
            management and dedicated services focused on functional optimization.
            Abdul specializes in managing and ensuring the functionality and
            efficiency for the company's trucks. In doing so, he facilitates the
            productivity of the dedicated line haul runs.        </h2>
      </div>
    </section>
  );
}

export default Section;
