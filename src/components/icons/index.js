
import React from "react"

import IconGithub from "./Github"

const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "github":
      return <IconGithub color={color} />
    default:
      return null
  }
}

export default Icon