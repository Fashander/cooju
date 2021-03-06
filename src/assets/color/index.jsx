import { createMuiTheme } from '@material-ui/core/styles';

const jsJson = JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"rgba(238, 236, 249, 1)","default":"rgba(255, 255, 255, 1)"},"primary":{"light":"rgba(100, 116, 195, 1)","main":"rgba(62, 82, 181, 1)","dark":"rgba(43, 57, 126, 1)","contrastText":"rgba(255, 255, 255, 1)"},"secondary":{"light":"rgba(139, 116, 144, 1)","main":"rgba(111, 82, 117, 1)","dark":"rgba(77, 57, 81, 1)","contrastText":"rgba(255, 255, 255, 1)"},"error":{"light":"#e57373","main":"rgba(240, 19, 46, 1)","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.65)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}');

const theme = createMuiTheme({
    ...jsJson
})

export default theme;