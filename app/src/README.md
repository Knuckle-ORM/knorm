A design pattern and boilerplate for building angular apps on joomla with knuckle.

Dev Path
Roster View in Angular
Wizard View in Angular
#__knorm_items.sql in installer
demo setting keys to false on multiple calls to collections.

known issues:
using an app item collection more than once per run will lead to data collision in the registry, so if you have to call it again,
you have to set the 'keys' parameter for the app state call to false.