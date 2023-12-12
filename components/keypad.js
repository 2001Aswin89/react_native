import { StyleSheet, Text, View ,Button} from 'react-native';
import { commonStyles } from '../assets/css/style'
export default function Keyboard() {
  return (
    <>
        <div style={commonStyles.keyboard__container} class="keyboard__container">
        <button class="button__num" value="1" title='1' style={commonStyles.button__num}></button>
        <button class="button__num" value="2" title='2' style={commonStyles.button__num}></button>
        <button class="button__num" value="3" title='3' style={commonStyles.button__num}></button>
        <button class="button__num" value="4" title='4' style={commonStyles.button__num}></button>
        <button class="button__num" value="5" title='5' style={commonStyles.button__num}></button>
        <button class="button__num" value="6" title='6' style={commonStyles.button__num}></button>
        <button class="button__num" value="7" title='7' style={commonStyles.button__num}></button>
        <button class="button__num" value="8" title='8' style={commonStyles.button__num}></button>
        <button class="button__num" value="9" title='9' style={commonStyles.button__num}></button>
        <button class="button__num" value="0" title='0' style={commonStyles.button__num}></button>

        </div>
    </>
  )
}