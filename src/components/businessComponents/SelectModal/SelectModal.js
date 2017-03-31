/**
 * Created by janeluck on 3/31/17.
 */
import React, {PropTypes} from 'react'
import {Dropdown, Button, Icon, Menu} from 'antd'

const SelectModal = ({onMenuClick, menuOptions = [], buttonStyle, dropdownProps}) => {
  return (<div>222</div>)
}

SelectModal.propTypes = {
  onMenuClick: PropTypes.func,
  menuOptions: PropTypes.array.isRequired,
  buttonStyle: PropTypes.object,
  dropdownProps: PropTypes.object,
}

export default SelectModal
