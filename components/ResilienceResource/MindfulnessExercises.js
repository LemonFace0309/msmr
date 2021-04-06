// @author Jimmy Yang
import React from 'react'
import ColourBox from './ColourBox'
import ColourBoxContainer from './ColourBoxContainer'
import styles from './MindfulnessExercises.module.css'

function MindfulnessExercises({ exercises }) {
  let classStyles = []
  classStyles.push(styles.MindfulnessExercises)
  classStyles.push('container')
  classStyles = classStyles.join(' ')
  return (
    <div className={classStyles}>
      <h1>
        {' '}
        The following mindfulness exercises may be useful, and were produced for
        two community-based projects* by our collaborators to promote collective
        resilience.{' '}
      </h1>

      <ColourBoxContainer>
        {exercises.boxes.map((box) => {
          return (
            <ColourBox
              key={box.title}
              title={box.title}
              points={box.points}
              foreground={exercises.foreground}
              background={exercises.background}
              margin={exercises.margin}
              format={exercises.format}
            />
          )
        })}
      </ColourBoxContainer>

      <p className={styles.Disclaimer}>
        *CHAMPs-In-Action to reduce HIV stigma and promote collective
        resilience; and WE-CARE (Women Empowerment – Caregiver Acceptance &
        Resilience E-Learning) study to reduce mental health stress and promote
        resilience of temporary foreign workers. These projects are led by Dr.
        Kenneth P. Fung (AIM Clinic, University Health Network); Dr. Alan T. Li
        (Committee for Accessible AIDS Treatment, Regent Park Community Health
        Centre); Professor Mandana Vahabi and Professor Josephine P. Wong
        (Daphne Cockwell School of Nursing, Ryerson University). Special
        appreciation and gratitude to Krisel Abulencia, RN, MN, who did the
        audio recording.
      </p>
    </div>
  )
}

MindfulnessExercises.defaultProps = {
  exercises: {
    foreground: '#95A9EF',
    background: 'white',
    margin: 0,
    format: 'paragraphs',
    boxes: [
      {
        title: 'Mindfulness Practice #1: Grounding Exercise',
        points: [
          'This is a grounding exercise that helps us connect to the present moment and let go of thoughts/worries.',
        ],
      },
      {
        title: 'Mindfulness Practice #2: Clouds in the Sky',
        points: [
          'This “de-fusion” exercise helps us to develop skills in observing our thoughts and emotions (worries, anxiety, fear) and recognize them as what they are — thoughts, feelings and emotion, nothing more, nothing less. This is very helpful in reducing worries and anxiety.',
        ],
      },
      {
        title: 'Mindfulness Practice #3: Loving Kindness',
        points: [
          'The practice of this loving-kindness exercise during time of crises and uncertainty may help to promote psychological resilience by enabling us to connect with joy and gratitude amidst fear, anxiety and suffering.',
        ],
      },
    ],
  },
}

export default MindfulnessExercises
