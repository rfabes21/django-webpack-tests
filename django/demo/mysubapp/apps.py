from django.apps import AppConfig


class MyDemoConfig(AppConfig):
    name = "demo.mysubapp"
    verbose_name = "MySubApp"

    def ready(self):
        pass
