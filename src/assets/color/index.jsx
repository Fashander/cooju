import { createMuiTheme } from '@material-ui/core/styles';

const jsJson = JSON.parse('{"palette":{"common":{"black":"rgba(53, 54, 58, 1)","white":"rgba(229, 238, 218, 1)"},"background":{"paper":"rgba(236, 240, 243, 1)","default":"rgba(236, 240, 243, 1)"},"primary":{"light":"rgba(193, 217, 46, 1)","main":"rgba(0, 255, 0, 1)","dark":"rgba(125, 139, 17, 1)","contrastText":"rgba(85, 21, 13, 1)"},"secondary":{"light":"rgba(251, 210, 4, 1)","main":"rgba(249, 187, 19, 1)","dark":"rgba(252, 180, 6, 1)","contrastText":"rgba(236, 240, 243, 1)"},"error":{"light":"rgba(229, 77, 67, 1)","main":"rgba(223, 33, 21, 1)","dark":"rgba(156, 23, 14, 1)","contrastText":"rgba(236, 240, 243, 1)"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(78, 78, 78, 1)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}');

const theme = createMuiTheme({
    ...jsJson
})

export default theme;