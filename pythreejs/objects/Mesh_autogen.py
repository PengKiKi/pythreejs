from ipywidgets import Widget, DOMWidget, widget_serialization, Color
from traitlets import Unicode, Int, CInt, Instance, This, Enum, Tuple, List, Dict, Float, CFloat, Bool, Union, Any

from ..enums import *
from ..traits import *

from ..core.Object3D import Object3D

from ..materials.Material_autogen import Material
from ..core.Geometry_autogen import Geometry

class Mesh(Object3D):
    """Mesh
    
    Autogenerated by generate-wrappers.js 
    Date: Fri Oct 21 2016 17:17:08 GMT-0700 (PDT) 
    See http://threejs.org/docs/#Reference/Objects/Mesh 
    """

    def __init__(self, geometry=None, material=None, **kwargs):
        kwargs['geometry'] = geometry
        kwargs['material'] = material
        super(Object3D, self).__init__(**kwargs)

    _view_name = Unicode('MeshView').tag(sync=True)
    _model_name = Unicode('MeshModel').tag(sync=True)

    material = Instance(Material, allow_none=True).tag(sync=True, **widget_serialization)
    geometry = Instance(Geometry, allow_none=True).tag(sync=True, **widget_serialization)
