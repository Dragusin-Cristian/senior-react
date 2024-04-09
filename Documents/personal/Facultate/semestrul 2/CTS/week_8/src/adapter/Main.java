package adapter;

interface DataReader {
    String readData();
}

class XMLDataReader {
    String readXML(){
        return "Data from the XML";
    }
}

class JSONDataReader {
    String readJSON(){
        return "Data from JSON";
    }
}

class XMLAdapter implements DataReader {
    private XMLDataReader xmlReader;

    public XMLAdapter(XMLDataReader xmlReader){
        this.xmlReader = xmlReader;
    }

   @Override
    public String readData() {
        return xmlReader.readXML();
    }
}


class JSONAdapter implements DataReader {
    private JSONDataReader jsonReader;

    public JSONAdapter(JSONDataReader jsonReader){
        this.jsonReader = jsonReader;
    }

    @Override
    public String readData() {
        return jsonReader.readJSON();
    }
}

public class Main {
    public static void main(String[] args) {

    }
}