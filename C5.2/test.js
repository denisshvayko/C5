xmlString = "<list>\n" +
    "  <student>\n" +
    "    <name lang=\"en\">\n" +
    "      <first>Ivan</first>\n" +
    "      <second>Ivanov</second>\n" +
    "    </name>\n" +
    "    <age>35</age>\n" +
    "    <prof>teacher</prof>\n" +
    "  </student>\n" +
    "  <student>\n" +
    "    <name lang=\"ru\">\n" +
    "      <first>Петр</first>\n" +
    "      <second>Петров</second>\n" +
    "    </name>\n" +
    "    <age>58</age>\n" +
    "    <prof>driver</prof>\n" +
    "  </student>\n" +
    "</list>"

jsonString = "{\n" +
    "    \"list\": [\n" +
    "        {\n" +
    "            \"name\": \"Petr\",\n" +
    "            \"age\": \"20\",\n" +
    "            \"prof\": \"mechanic\"\n" +
    "        },\n" +
    "        {\n" +
    "            \"name\": \"Vova\",\n" +
    "            \"age\": \"60\",\n" +
    "            \"prof\": \"pilot\"\n" +
    "        }\n" +
    "    ]\n" +
    "}"

const parser = new DOMParser();
xmldata = parser.parseFromString(xmlString, "text/xml");
jsonObj = JSON.parse(jsonString);
students = xmldata.querySelectorAll('student')
for (let i=0; i<students.length; i++) {
    console.log(students[i])
}
let jsonInfo = jsonObj.list;

for (let k=0; k<jsonInfo.length; k++){
    console.log(jsonInfo[k])
}
console.log(xmldata)
console.log(jsonObj)