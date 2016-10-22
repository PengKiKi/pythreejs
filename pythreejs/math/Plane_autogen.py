from ipywidgets import Widget, DOMWidget, widget_serialization, Color
from traitlets import Unicode, Int, CInt, Instance, This, Enum, Tuple, List, Dict, Float, CFloat, Bool, Union, Any

from ..enums import *
from ..traits import *

from .._base.Three import ThreeWidget


class Plane(ThreeWidget):
    """Plane
    
    Autogenerated by generate-wrappers.js 
    Date: Fri Oct 21 2016 17:17:08 GMT-0700 (PDT) 
    See http://threejs.org/docs/#Reference/Math/Plane 
    """

    def __init__(self, normal=[0,0,0], constant=0, **kwargs):
        kwargs['normal'] = normal
        kwargs['constant'] = constant
        super(ThreeWidget, self).__init__(**kwargs)

    _view_name = Unicode('PlaneView').tag(sync=True)
    _model_name = Unicode('PlaneModel').tag(sync=True)

    normal = Vector3(default=[0,0,0]).tag(sync=True)
    constant = CFloat(0).tag(sync=True)
