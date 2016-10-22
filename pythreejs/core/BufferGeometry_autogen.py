from ipywidgets import Widget, DOMWidget, widget_serialization, Color
from traitlets import Unicode, Int, CInt, Instance, This, Enum, Tuple, List, Dict, Float, CFloat, Bool, Union, Any

from ..enums import *
from ..traits import *

from .._base.Three import ThreeWidget


class BufferGeometry(ThreeWidget):
    """BufferGeometry
    
    Autogenerated by generate-wrappers.js 
    Date: Fri Oct 21 2016 17:17:07 GMT-0700 (PDT) 
    See http://threejs.org/docs/#Reference/Core/BufferGeometry 
    """

    def __init__(self, **kwargs):
        super(ThreeWidget, self).__init__(**kwargs)

    _view_name = Unicode('BufferGeometryView').tag(sync=True)
    _model_name = Unicode('BufferGeometryModel').tag(sync=True)

    uuid = Unicode("").tag(sync=True)
    name = Unicode("").tag(sync=True)
    type = Unicode("").tag(sync=True)
    attributes = Tuple().tag(sync=True)
    index = BufferAttribute(default_value=None, allow_none=True).tag(sync=True)
