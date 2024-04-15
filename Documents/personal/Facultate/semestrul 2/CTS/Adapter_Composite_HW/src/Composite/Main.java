package Composite;


public class Main {
    public static void main(String[] args) {
        Button button1 = new Button("OK");
        Button button2 = new Button("Cancel");

        Panel mainPanel = new Panel();
        mainPanel.addComponent(button1);
        mainPanel.addComponent(button2);

        Panel subPanel = new Panel();
        subPanel.addComponent(new Button("Yes"));
        subPanel.addComponent(new Button("No"));

        mainPanel.addComponent(subPanel);

        mainPanel.draw();
    }
}
