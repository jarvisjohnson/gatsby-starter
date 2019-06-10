import React from 'react'
import PropTypes from 'prop-types'
import { TextPageTemplate } from '../../templates/text-page'

const TextPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <TextPageTemplate
        title={data.title}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

TextPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TextPagePreview
