package Composite;
import java.util.List;
import java.util.ArrayList;

class Panel implements GUIComponent {
    private List<GUIComponent> components = new ArrayList<>();

    public void addComponent(GUIComponent component) {
        components.add(component);
    }


    @Override
    public void draw() {
        System.out.println("Panel:");
        for (GUIComponent component : components) {
            component.draw();
        }
    }
}
