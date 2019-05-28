interface LabelValue {
  label: string,
}

function getLabel(label: LabelValue) {
  console.log(label.label);
}

let obj = {size: 19, label: 'string'};

console.log(getLabel(obj));