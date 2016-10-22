from ipywidgets import Widget, DOMWidget, widget_serialization, Color
from traitlets import Unicode, Int, CInt, Instance, This, Enum, Tuple, List, Dict, Float, CFloat, Bool, Union, Any

from ...enums import *
from ...traits import *

from ...core.BufferGeometry_autogen import BufferGeometry


class BoxBufferGeometry(BufferGeometry):
    """BoxBufferGeometry
    
    Autogenerated by generate-wrappers.js 
    Date: Fri Oct 21 2016 17:17:08 GMT-0700 (PDT) 
    See http://threejs.org/docs/#Reference/Extras.Geometries/BoxBufferGeometry 
    """

    def __init__(self, width=10, height=10, depth=10, widthSegments=1, heightSegments=1, depthSegments=1, **kwargs):
        kwargs['width'] = width
        kwargs['height'] = height
        kwargs['depth'] = depth
        kwargs['widthSegments'] = widthSegments
        kwargs['heightSegments'] = heightSegments
        kwargs['depthSegments'] = depthSegments
        super(BufferGeometry, self).__init__(**kwargs)

    _view_name = Unicode('BoxBufferGeometryView').tag(sync=True)
    _model_name = Unicode('BoxBufferGeometryModel').tag(sync=True)

    width = CFloat(10).tag(sync=True)
    height = CFloat(10).tag(sync=True)
    depth = CFloat(10).tag(sync=True)
    widthSegments = CInt(1).tag(sync=True)
    heightSegments = CInt(1).tag(sync=True)
    depthSegments = CInt(1).tag(sync=True)
