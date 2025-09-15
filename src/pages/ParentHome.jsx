export default function ParentHome() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header del Dashboard con mejor diseño */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2 2 4-4" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Panel Principal</h1>
            </div>
            <p className="text-gray-600 text-lg">Seguimiento académico de Carlos González</p>
          </div>
          <div className="text-right">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <p className="text-sm text-gray-500">Última actualización</p>
              <p className="text-sm font-semibold text-gray-900">Hoy, 2:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Estadísticas con mejor diseño visual */}
      <div className="grid grid-cols-2 gap-8">
        <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Tareas Asignadas</div>
              <div className="text-xs text-green-600 font-medium mt-1">+2 esta semana</div>
            </div>
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Completadas</div>
              <div className="text-xs text-green-600 font-medium mt-1">62.5% de progreso</div>
            </div>
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-yellow-200 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Pendientes</div>
              <div className="text-xs text-red-600 font-medium mt-1">1 vence pronto</div>
            </div>
            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-purple-200 transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Asistencia</div>
              <div className="text-xs text-green-600 font-medium mt-1">Excelente</div>
            </div>
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal mejorado */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Actividades Recientes con mejor diseño */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Actividades Recientes</h2>
              </div>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700 hover:underline transition-colors">Ver todas</button>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="group flex items-start space-x-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-sm transition-all duration-200 border border-transparent hover:border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-900 transition-colors">Nueva tarea de Matemáticas</h3>
                <p className="text-gray-600 mt-1">Resolver ecuaciones cuadráticas - Capítulo 8</p>
                <div className="mt-3 flex items-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Pendiente
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2 2 4-4" />
                    </svg>
                    Vence: 28 Mayo 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 bg-gray-50 rounded-xl hover:bg-green-50 hover:shadow-sm transition-all duration-200 border border-transparent hover:border-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-green-900 transition-colors">Examen de Ciencias aprobado</h3>
                <p className="text-gray-600 mt-1">Calificación: 8.7 - Reacciones químicas</p>
                <div className="mt-3 flex items-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Completado
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2 2 4-4" />
                    </svg>
                    25 Mayo 2025
                  </span>
                </div>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-5 bg-gray-50 rounded-xl hover:bg-red-50 hover:shadow-sm transition-all duration-200 border border-transparent hover:border-red-100">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-red-900 transition-colors">Reunión de padres programada</h3>
                <p className="text-gray-600 mt-1">Seguimiento académico segundo periodo</p>
                <div className="mt-3 flex items-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Importante
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2 2 4-4" />
                    </svg>
                    30 Mayo 2025 - 3:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Lateral mejorado */}
        <div className="space-y-6">
          {/* Próximos Eventos */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Próximos Eventos</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">Festival de Talentos</p>
                  <p className="text-xs text-gray-600">15 Jun - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">Entrega de Boletines</p>
                  <p className="text-xs text-gray-600">20 Jun - 8:00 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">Inicio de Vacaciones</p>
                  <p className="text-xs text-gray-600">25 Jun</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rendimiento Académico */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Rendimiento</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Matemáticas</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-bold text-gray-900 text-lg">8.5</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Ciencias</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-bold text-gray-900 text-lg">9.2</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Español</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="font-bold text-gray-900 text-lg">7.8</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Sociales</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="font-bold text-gray-900 text-lg">8.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
