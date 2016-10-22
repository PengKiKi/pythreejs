from ipywidgets import Widget, DOMWidget, widget_serialization, Color
from traitlets import Unicode, Int, CInt, Instance, This, Enum, Tuple, List, Dict, Float, CFloat, Bool, Union, Any

from ..enums import *
from ..traits import *

from .._base.Three import ThreeWidget


class Box3(ThreeWidget):
    """Box3
    
    Autogenerated by generate-wrappers.js 
    Date: Fri Oct 21 2016 17:17:07 GMT-0700 (PDT) 
    See http://threejs.org/docs/#Reference/Math/Box3 
    """

    def __init__(self, min=[0,0,0], max=[0,0,0], **kwargs):
        kwargs['min'] = min
        kwargs['max'] = max
        super(ThreeWidget, self).__init__(**kwargs)

    _view_name = Unicode('Box3View').tag(sync=True)
    _model_name = Unicode('Box3Model').tag(sync=True)

    min = Vector3(default=[0,0,0]).tag(sync=True)
    max = Vector3(default=[0,0,0]).tag(sync=True)
