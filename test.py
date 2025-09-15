from kivy.app import App
from kivy.lang import Builder
from kivy.uix.screenmanager import ScreenManager, Screen


# Declare both screens
class MenuScreen(Screen):
    pass

class SettingsScreen(Screen):
    def build(self):
        layout = BoxLayout(orientation='vertical')
        
        Window.clearcolor = (0.5, 0.4, 0, 0.8)
        
        label = Label(text="Motizou\nUn jeux d'enfant !")
        label.halign = "center"
        label.font_size = 35
        
        btn = Button(text="Commencer l'aventure !", size_hint =(.6, .6), pos_hint ={'x':.2, 'y':.2}, background_color = "#FFFFFF")
        
        btn.bind(on_press=lambda x: self.changeScreen())
        
        layout.add_widget(label)
        layout.add_widget(btn)
        return layout

    def changeScreen(self):
        self.manager.current = 'choix' # Nom de la première vue


class TestApp(App):

    def build(self):
        # Create the screen manager
        sm = ScreenManager()
        sm.add_widget(MenuScreen(name='menu'))
        sm.add_widget(SettingsScreen(name='settings'))

        return sm

if __name__ == '__main__':
    TestApp().run()
