from ipywidgets import Widget, DOMWidget, widget_serialization, Color
from traitlets import Unicode, Int, CInt, Instance, This, Enum, Tuple, List, Dict, Float, CFloat, Bool, Union, Any

from ...enums import *
from ...traits import *

from ...core.BufferGeometry_autogen import BufferGeometry


class CylinderBufferGeometry(BufferGeometry):
    """CylinderBufferGeometry
    
    Autogenerated by generate-wrappers.js 
    Date: Fri Oct 21 2016 17:17:08 GMT-0700 (PDT) 
    See http://threejs.org/docs/#Reference/Extras.Geometries/CylinderBufferGeometry 
    """

    def __init__(self, radiusTop=20, radiusBottom=20, height=100, radiusSegments=8, heightSegments=1, openEnded=False, thetaStart=0, thetaLength=6.283185307179586, **kwargs):
        kwargs['radiusTop'] = radiusTop
        kwargs['radiusBottom'] = radiusBottom
        kwargs['height'] = height
        kwargs['radiusSegments'] = radiusSegments
        kwargs['heightSegments'] = heightSegments
        kwargs['openEnded'] = openEnded
        kwargs['thetaStart'] = thetaStart
        kwargs['thetaLength'] = thetaLength
        super(BufferGeometry, self).__init__(**kwargs)

    _view_name = Unicode('CylinderBufferGeometryView').tag(sync=True)
    _model_name = Unicode('CylinderBufferGeometryModel').tag(sync=True)

    radiusTop = CFloat(20).tag(sync=True)
    radiusBottom = CFloat(20).tag(sync=True)
    height = CFloat(100).tag(sync=True)
    radiusSegments = CInt(8).tag(sync=True)
    heightSegments = CInt(1).tag(sync=True)
    openEnded = Bool(False).tag(sync=True)
    thetaStart = CFloat(0).tag(sync=True)
    thetaLength = CFloat(6.283185307179586).tag(sync=True)
