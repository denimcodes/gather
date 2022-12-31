import React from 'react'
import discussions from "../assets/discussions.svg"
import lightBulb from "../assets/light-bulb.svg"
import questions from "../assets/questions.svg"
import { Box } from './Box'
import { Icon } from './Icon'
import { Heading, Text } from './Text'

const Category = ({title, icon}) => {
  return (
    <Box css={{
      padding: "$3 $4",
      backgroundColor: "$gray50",
      border: "1px solid $gray300",
      borderRadius: "$borderWidths$4",
      display: "flex",
      gap: "$2",
      alignItems: "center",      
      minWidth: "8rem",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "$gray100",
      }
    }}>
      <Icon src={icon} />
      <Text css={{
              fontWeight: "$semibold",
              fontSize: "$md"
      }}>{title}</Text>
    </Box>
  )
}

const categories = [
  {
    title: "Questions",
    src: questions
  },
  {
    title: "Discussions",
    src: discussions
  },
    {
    title: "Ideas",
    src: lightBulb
  }
]

const Categories = () => {
  return (
    <Box>
      <Heading as={"h3"} css={{
        fontSize: "$lg"
      }}>
        Content Categories
      </Heading>
          <Box css={{
      display: "flex",
      gap: "$4",
      marginTop: "$4",
    }}>
      {categories.map((category) => {
        return <Category key={category.title} title={category.title} icon={category.src} />
      })}
    </Box>
    </Box>
  )
}

export default Categories