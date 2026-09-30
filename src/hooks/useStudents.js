const STUDENT = {
  nombre: 'Diego ',
  carnet: '20240657',
  seccion: 'A3',
  grupo: '2',
};

export default function useStudent() {
  const fields = [
    { label: 'Nombre', value: STUDENT.nombre },
    { label: 'Carnet', value: STUDENT.carnet },
    { label: 'Sección y grupo', value: `Sección ${STUDENT.seccion} - Grupo ${STUDENT.grupo}` },
  ];
  return { student: STUDENT, fields };
}
