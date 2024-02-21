import React from 'react'
import { useTranslation } from 'react-i18next'
import LangSelector from './LangSelector'
const App = () => {
  const { t } = useTranslation()
  const greeting = t("greeting", {
    hero: "IronMan"
  })
  const { line1, line2 } = t("dec")
  return (
    <>S
      {/* <UseMemo /> */}
      <LangSelector />
      <h1>{greeting}</h1>
      <p>{line1}</p>
      <p>{line2}</p>
    </>
  )
}

export default App