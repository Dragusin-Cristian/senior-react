package composite;


interface IFileSystemItem {
    void printName();
    void addItem(IFileSystemItem item);
}

class File implements IFileSystemItem{
    private String name;

    public File (String name){
        this.name = name;
    }

    @Override
    public void addItem(IFileSystemItem item){
        throw new RuntimeException("Not implemented");
    }

    @Override
    public void printName() {
        System.out.println("File: " + name);
    }
}

class Directory implements IFileSystemItem{
    private List<IFileSystemItem> items = new ArrayList<>();
    private String name;

    public Directory (String name){
        this.name = name;
    }


    @Override
    public void printName() {
        System.out.println("Directory: " + name);
        for (IFileSystemItem item : items){
            item.printName();
        }
    }

    @Override
    public void addItem(IFileSystemItem item){
        items.add(item);
    }
}


public class Main {
    public static void main(String[] args) {
        IFileSystemItem file1 = new File("File1.txt");
        IFileSystemItem file2 = new File("File2.docx");
        IFileSystemItem file3 = new File("File3.pdf");

        IFileSystemItem rootDirectory = new Directory("Directory");

        rootDirectory.addItem(file1);
        rootDirectory.addItem(file2);

        IFileSystemItem subDirectory = new Directory("Subdirectory");

        subDirectory.addItem(file3);

        rootDirectory.addItem(subDirectory);

        rootDirectory.printName();
    }
}
