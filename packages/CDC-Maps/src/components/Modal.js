import React from 'react'
import closeIcon from '../images/close.svg'

export default (props) => {

  const { applyTooltipsToGeo, content, closeModal, capitalize, applyLegendToValue, state } = props

  const tooltip = applyTooltipsToGeo(content.geoName, content.geoData)
  
  const legendColors = applyLegendToValue(content.geoData)

  return (
    <section className={capitalize ? 'modal-content capitalize' : 'modal-content'} id="tooltip" aria-hidden="true">
      <img src={closeIcon} className="modal-close" onClick={() => closeModal()} alt="Close Modal" />
      {'data' === state.general.type && <span className="legend-color" style={{backgroundColor: legendColors[0]}}></span>}
      <div className="content">
        {tooltip}
      </div>
    </section>
  )
}