from ipywidgets import Widget, DOMWidget, widget_serialization, Color
from traitlets import Unicode, Int, CInt, Instance, This, Enum, Tuple, List, Dict, Float, CFloat, Bool, Union, Any

from ...enums import *
from ...traits import *

from ...core.Geometry_autogen import Geometry

from ...core.Geometry_autogen import Geometry
from ...core.BufferGeometry_autogen import BufferGeometry

class WireframeGeometry(Geometry):
    """WireframeGeometry
    
    Autogenerated by generate-wrappers.js 
    Date: Fri Oct 21 2016 17:17:08 GMT-0700 (PDT) 
    See http://threejs.org/docs/#Reference/Extras.Geometries/WireframeGeometry 
    """

    def __init__(self, geometry=None, **kwargs):
        kwargs['geometry'] = geometry
        super(Geometry, self).__init__(**kwargs)

    _view_name = Unicode('WireframeGeometryView').tag(sync=True)
    _model_name = Unicode('WireframeGeometryModel').tag(sync=True)

    geometry = Union([
        Instance(Geometry, allow_none=True).tag(sync=True, **widget_serialization),
        Instance(BufferGeometry, allow_none=True).tag(sync=True, **widget_serialization)
    ])
