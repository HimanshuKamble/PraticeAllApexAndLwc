import { LightningElement } from "lwc";

export default class App extends LightningElement {
  data =  []
  // Avoid memory leaks
  _handler
  columns = []
  connectedCallback() {
    this._handler = (event) => this.handlePaste(event)
    document.addEventListener('paste', this._handler)
  }
  disconnectedCallback() {
    document.removeEventListener('paste', this._handler)
  }
  handlePaste(event) {
    let csvData = this.csvStringToArray(event.clipboardData.getData('text/plain'))
    this.columns = csvData.splice(0, 1)[0].map((value) => ({ fieldName: value, label: value }))
    this.data = csvData.map(row => row.reduce((p,v,i) => (p[this.columns[i].fieldName] = v, p), {}))
  }
  // Borrowed from https://stackoverflow.com/a/14991797/2132791, modified for tsv
  csvStringToArray(str) {
    var arr = [];
    var quote = false;
    for (var row = 0, col = 0, c = 0; c < str.length; c++) {
        var cc = str[c], nc = str[c+1];
        arr[row] = arr[row] || [];
        arr[row][col] = arr[row][col] || '';
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }
        if (cc == '"') { quote = !quote; continue; }
        if (cc == '\t' && !quote) { ++col; continue; }
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }
        arr[row][col] += cc;
    }
    return arr;
  }
}