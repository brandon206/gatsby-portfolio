
import React from "react"

import IconGithub from "./Github"
import IconLinkedIn from "./LinkedIn"
import IconResume from "./Resume"
import IconEmail from "./Email"

const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "github":
      return <IconGithub color={color} />
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "resume":
      return <IconResume color={color} />
    case "email":
      return <IconEmail color={color} />
    default:
      return null
  }
}

export default Icon