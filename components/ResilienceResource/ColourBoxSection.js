// @author Jimmy Yang
import React from 'react'
import ColourTitle from './ColourTitle'
import ColourBox from './ColourBox'
import ColourBoxContainer from './ColourBoxContainer'

function ColourBoxSection({ sections }) {
  return (
    <>
      {sections.map((section) => {
        return (
          <div key={section.header.title}>
            <ColourTitle
              title={section.header.title}
              description={section.header.description}
              foreground={section.header.foreground}
              background={section.header.background}
            />
            <ColourBoxContainer>
              {section.content.boxes.map((box, i) => {
                return (
                  <ColourBox
                    key={box.title + i}
                    title={box.title}
                    points={box.points}
                    foreground={section.content.foreground}
                    background={section.content.background}
                    width={section.content.width}
                    height={section.content.height}
                    margin={section.content.margin}
                    format={section.content.format}
                  />
                )
              })}
            </ColourBoxContainer>
          </div>
        )
      })}
    </>
  )
}

ColourBoxSection.defaultProps = {
  sections: [
    {
      header: {
        title: 'Internal Resilience',
        description:
          'Internal resilience refers to your ability to take care of yourself. Internal resilience can be improved by engaging in behaviours and activities that promote self-care and well-being. A resilient mind and body can act as the stepping stone to allow you to tackle any challenges or goals that may arise. Some suggestions for maximizing your internal resilience can include:',
        foreground: 'black',
        background: '#FFDC4B',
      },
      content: {
        foreground: 'black',
        background: '#FCAC4B',
        width: 450,
        height: 210,
        margin: 10,
        format: 'points',
        boxes: [
          {
            title: 'Identifying and prioritizing your mental health',
            points: [
              'take breaks when needed',
              'allow yourself to have down-time or “me time”',
              'listen to your signs of distress, such as being stressed, anxious or depressed',
              'seek assistance or tell someone who listens',
            ],
          },
          {
            title: 'Identifying and prioritizing your physical health',
            points: [
              'get enough sleep',
              'have a balanced and nutritious diet',
              'have regular check-ups with your health provider(s)',
              'Engaging in exercises that train your mind and help with mood',
              'meditation or yoga',
            ],
          },
          {
            title: 'Exercising your body through physical activities',
            points: ['running, walking, going to the gym', 'enjoying hobbies'],
          },
        ],
      },
    },
    {
      header: {
        title: 'Coping Pursuits',
        description:
          'Coping pursuits refers to your ability in addressing everyday challenges and goals. Maximizing your coping pursuits means growing your skills and abilities to respond to the challenges and demands that may arise. Some helpful ideas that may assist in improving your coping pursuits include: ',
        foreground: 'white',
        background: '#95A9EF',
      },
      content: {
        foreground: '#95A9EF',
        background: 'white',
        width: 450,
        height: 250,
        margin: 10,
        format: 'points',
        boxes: [
          {
            title: 'Identifying your strengths',
            points: [
              'what are you good at?',
              'how can these strengths help you with your current challenges and activities?',
              'relate your strengths to your goals',
            ],
          },
          {
            title: 'Find meaning in life’s challenges',
            points: [
              'approaching challenges as new experiences to learn and grow',
              'ask yourself what motivates you in different circumstances',
            ],
          },
          {
            title: 'Explore new opportunities',
            points: ['challenge yourself to try new things, big or small'],
          },
          {
            title: 'Everyone experiences failures',
            points: [
              'do not let failures define your story or your worth as a person',
              'figure out what you can learn from these experiences',
              'examine what opportunities or change can come from these failures',
            ],
          },
        ],
      },
    },
    {
      header: {
        title: 'External Resilience',
        description:
          'External resilience refers to defining your role within your community. Being active in your community is healthy. Maximizing external resilience means understanding or creating your own role and identity, and successfully making connections and accessing services that support your endeavours. Some suggestions to maximize external resilience include:',
        foreground: 'black',
        background: '#7AF0B7',
      },
      content: {
        foreground: 'lightblue',
        background: '#7AF0F7',
        width: 500,
        height: 200,
        margin: 0,
        format: 'points',
        boxes: [
          {
            title: null,
            points: [
              'managing your finances to allow you to meet your needs',
              'budgeting',
              'engage in financial planning',
              'accessing social services that assists with finances and education',
              'identifying, or creating an identity',
              'find family, friends, or communities in which you feel supported',
            ],
          },
          {
            title: null,
            points: [
              'make decisions, large or small, that help you feel in control of your life',
              'access support services and resources available to you',
              'know your rights to social, legal, and health services in your community',
              'know where to seek help should you require these services e.g., web search, local government websites',
              'ensure you can physically access them if needed',
            ],
          },
        ],
      },
    },
  ],
}

export default ColourBoxSection
